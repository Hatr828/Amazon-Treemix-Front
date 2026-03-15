import {ManufacturerContent} from "@/app/product_page/types/product_page_types";

export const ManufacturerBlock: React.FC<{ content: ManufacturerContent }> = ({ content }) => (
    <>
        <h3 className="from_the_manufacturer">From the manufacturer</h3>
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </>
);
