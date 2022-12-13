# Create React App + Docker Compose

A project that runs a Node server and a create-react-app app via two separate containers, using Docker Compose.

## Development

```
docker-compose up
```

The local directories are mounted into the containers, so changes will reflect immediately. However, changes to package.json will likely need to a rebuild: `docker-compose down && docker-compose build && docker-compose up`.
