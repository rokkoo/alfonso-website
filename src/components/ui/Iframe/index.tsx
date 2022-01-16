interface Props {
  src: string;
  title: string;
}

const Iframe: React.FC<Props> = ({ src, title }) => {
  return (
    <iframe
      src={src}
      style={{
        width: '100%',
        height: '500px',
        border: '0',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    />
  );
};

export default Iframe;
