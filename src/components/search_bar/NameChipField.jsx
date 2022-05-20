import NameChip from "../namechip/NameChip";
const NameChipField = (props) => {
  return (
    <div>
      <div>
        <div className=" name-chip-wrap d-flex flex-wrap flex-start">
          {props.newNameChip.map((element) => (
            <NameChip
              deleteOneUser={deleteOneUserHandle}
              details={element}
            ></NameChip>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NameChipField;
