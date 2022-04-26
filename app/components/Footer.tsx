interface FooterProps {
  colo: String;
  ray: String;
  timestamp: String;
}

export default function Footer({ colo, ray, timestamp }: FooterProps) {
  return (
    <footer id="technical-details">
      <ul>
        {colo ? <li>Facility: {colo}</li> : null}
        {ray ? <li>Ray ID: {ray}</li> : null}
        <li>{timestamp}</li>
      </ul>
    </footer>
  );
}
