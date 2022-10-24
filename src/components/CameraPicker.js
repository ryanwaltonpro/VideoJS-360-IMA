import react from "react";

export const CameraPicker = () => {
    const cameras = [
        {id: 1,
        src: "",
        poster: ""
        },
        {id: 2,
        src: "",
        poster: ""
        },
        {id: 3,
        src: "",
        poster: ""
        },
    ]
    
  return (
    <>
    {
        cameras.map((camera) => 
            <button>{`Camera ${camera.id}`}</button>
        )
    }
    </>
  );
};

export default CameraPicker
