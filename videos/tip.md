You can run following command to convert video format:
` -c:v libx264选项表示使用x264视频编码器，这是MP4格式的默认视频编码器。`
` -c:a aac选项表示使用AAC音频编码器。`

ffmpeg -i input.mp4 -c:v libx264 -c:a aac output.mp4
