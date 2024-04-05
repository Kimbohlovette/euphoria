import cors from 'cors';
import express from 'express';

const app = express();
app.use(express.json());

app.get('/:name', (req, res) => {
	return res.json({ greetings: 'Welcome ' + req.params.name }).status(200);
});

app.listen(8000, () => console.log('listening on port: ' + 8000));
