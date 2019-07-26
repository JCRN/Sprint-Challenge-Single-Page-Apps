import React from "react";
import { Card, Label } from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  // image={image}
  return (
    <Card>
      <Card.Content header={(name, type)} />
      <Card.Content description={dimension} />
      <Card.Content extra>
        <Label attached="bottom right">{residents} residents</Label>
      </Card.Content>
    </Card>
  );
}
