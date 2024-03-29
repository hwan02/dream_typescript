{
    type Video = {
        id: string
        title: string,
        url: string,
        data: string
    };

    type VideoMetaData = Omit<Video, 'id' | 'title' | 'h'>;
    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://',
            data: 'byte-data..'
        };
    }

    function getVideoMetadata(id: string): VideoMetaData {
        return {
            url: 'http://',
            data: 'data'
        }
    }
}