import { ProductType } from "@/app/product_page/types/product_page_types";

type Video = NonNullable<ProductType["videos"]>[number]

type Props = {
    video: Video
}

export function VideoWrapper({ video }: Props) {
    return (
        <div>
            <div className="video_container">
                {video.date && (
                    <div className="date_container">{formatDate(video.date)}</div>
                )}
            </div>

            <span>{video.name}</span>
            <div className="name_container">{video.author}</div>
        </div>
    )
}

function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}
