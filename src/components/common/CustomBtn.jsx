import { Button } from "@mui/material";

const CustomBtn = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size={props.size ? props.size : "large"}
      style={{
        background: "#8e8e8e",
        color: "#ffffff",
        ...props.style,
      }}
    >
      {props.iconTicket ? (
        <img
          src="/assets/icons/ticket.png"
          className="iconImage"
          alt="icon_button"
        />
      ) : null}

      {props.text}
    </Button>
  );
};

export default CustomBtn;
