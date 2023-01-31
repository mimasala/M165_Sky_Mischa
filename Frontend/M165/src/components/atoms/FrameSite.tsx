
type props = {
    url : string;
}

const FrameSite = ({url} : props) => {
    return (
        <div>
            <iframe 
                src="url" 
                width="100%"
                height="100%"
        ></iframe>
        </div>
    );
}

export default FrameSite;