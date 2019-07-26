import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard({ character }) {
  return (
    <Card>
      <Image src={character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          <span className="character-species">{character.species}</span>
          <span className="character-status">{character.status}</span>
        </Card.Meta>
        <Card.Description>
          <span className="charachter-location">
            Location: {character.location.name}
          </span>
          <span className="character-origin">
            Origin: {character.origin.name}
          </span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Episodes
        </a>
      </Card.Content>
    </Card>
  );
}
