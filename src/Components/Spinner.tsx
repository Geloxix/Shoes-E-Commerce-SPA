import { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";

const override: CSSProperties = {
   display: "block",
   margin: "100px auto"
};

const Spinner = ({ loading }: { loading: boolean}) => {
   return (
      <div>
         <BeatLoader 
            cssOverride={override}
            color="#EF4444"
            size={10}
            loading={loading}
         />
      </div>
   );
};

export default Spinner;
