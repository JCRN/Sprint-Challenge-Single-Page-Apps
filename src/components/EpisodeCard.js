import React from "react";
import { Card } from "semantic-ui-react";

export default function EpisodeCard({ name, episode, air_date }) {
  // image={image}
  return (
    <Card>
      <Card.Content header={name} />
      <Card.Content description={episode} />
      <Card.Content extra>{air_date}</Card.Content>
    </Card>
  );
}
