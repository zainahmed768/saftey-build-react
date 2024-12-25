import React, { useEffect, useRef, useState } from "react";
import ProfileLayout from "../../../layout/ProfileLayout/ProfileLayout";
import { DummyVideo } from "../../../constant";
import { useNavigate, useParams } from "react-router-dom";
import {
	useGetChapterDetailQuery,
	usePostChapterDetailMutation,
} from "../../../redux/services/CourseServices";
import ReactPlayer from "react-player";
import Alert from "../../../Components/SweetAlert/Alert";
import { Spin } from "antd";

const ChapterDetail = () => {
	const navigate = useNavigate();
	const param = useParams();
	const { slug } = param;

	const {
		data: viewChapter,
		isLoading,
		refetch,
	} = useGetChapterDetailQuery(slug);
	const chapterDetails = viewChapter?.response?.data;
	console.log(chapterDetails, "chapterDetails");

	const [progress, setProgress] = useState(0);
	const [duration, setDuration] = useState(0);
	const [play, setPlay] = useState(false);
	console.log(`Progress: ${progress}, Duration: ${duration}`);

	const playerRef = useRef(null);
	const [stopVideo, response] = usePostChapterDetailMutation();
	const [readyToSeek, setReadyToSeek] = useState(false);

	useEffect(() => {
		if (chapterDetails?.watch_time) {
			setProgress(Number(chapterDetails.watch_time) * 60); // Convert to seconds
		}
	}, [chapterDetails]);

	useEffect(() => {
		if (readyToSeek && playerRef.current && chapterDetails?.watch_time) {
			const seekTime = Number(chapterDetails.watch_time) * 60; // Convert minutes to seconds
			playerRef.current.seekTo(seekTime, "seconds");
		}
	}, [readyToSeek, chapterDetails?.watch_time]);

	useEffect(() => {
		refetch();
	}, []);

	const formatTime = (seconds) => {
		const hours = Math.floor(seconds / 3600); // Calculate hours
		const minutes = Math.floor((seconds % 3600) / 60); // Calculate remaining minutes
		const secs = Math.floor(seconds % 60); // Calculate remaining seconds
		return `${hours.toString().padStart(2, "0")}:${minutes
			.toString()
			.padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
	};

	const handleProgress = (progress) => {
		setProgress(Math.floor(progress.playedSeconds));
	};

	const handleDuration = (duration) => {
		setDuration(Math.floor(duration));
	};

	const handlePlay = (bool) => {
		setPlay(bool);
	};

	const handleStop = (bool) => {
		setPlay(bool);
		const formData = new FormData();
		formData.append("watch_time", progress / 60); // Convert to minutes
		const chapterObj = { slug: slug, watch_time: formData };
		stopVideo(chapterObj);
	};

	useEffect(() => {
		// Trigger handleStop when progress is close to duration
		if (duration > 0 && progress >= duration - 1) {
			handleStop(false);
		}
	}, [progress, duration]);

	useEffect(() => {
		if (response?.isSuccess) {
			Alert({
				title: "Success",
				text: `You have successfully watched ${chapterDetails?.title} chapter`,
				iconStyle: "success",
			});
			navigate("/my-course");
		}
	}, [response?.isSuccess]);

	return (
		<>
			<ProfileLayout type={"Chapter Detail"} sidebar={false}>
				{isLoading ? (
					<Spin
						size="large"
						style={{
							color: "#000",
						}}
					/>
				) : (
					<div className="row">
						<div className="col-lg-12">
							<div className="view-course-img-wrapper position-relative">
								<ReactPlayer
									ref={playerRef}
									url={chapterDetails?.video}
									playing={play}
									width={"100%"}
									height={"auto"}
									onProgress={handleProgress}
									onDuration={handleDuration}
									onEnded={() => handleStop(false)}
									onReady={() => setReadyToSeek(true)} // Triggered when the player is ready
								/>
								<div className="timestamp position-absolute bottom-0 text-white p-3">
									<span className="video-progress">{formatTime(progress)}</span>
									{" / "}
									<span className="time">{formatTime(duration)}</span>
								</div>
							</div>
							<div className="view-course-content-wrapper mt-3">
								<div className="view-course-headings-wrapper">
									<div className="topbar d-flex align-items-start justify-content-between">
										<h2 className="heading-font text-uppercase">
											{chapterDetails?.title}
										</h2>
										<span className={`GeneralButton`}>
											{!play ? (
												<button onClick={() => handlePlay(true)}>
													Play Chapter
												</button>
											) : (
												<button onClick={() => handleStop(false)}>
													Stop Watching
												</button>
											)}
										</span>
									</div>
									<p>{chapterDetails?.description}</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</ProfileLayout>
		</>
	);
};

export default ChapterDetail;
