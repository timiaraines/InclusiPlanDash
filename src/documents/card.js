import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const DocumentCard = ({ document, onEdit }) => {
  const lastEditedDate = document.lastEdited ? document.lastEdited.toDateString() : 'Date unavailable';

  return (
    <Card style={{ margin: 8 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {document.title}
        </Typography>
        <Typography color="textSecondary">
          Last edited: {lastEditedDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit(document)}>Edit</Button>
      </CardActions>
    </Card>
  );
};

export default DocumentCard;
