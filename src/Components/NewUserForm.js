import { useState } from 'react';
import { Form, Button, Box } from 'react-bulma-components/';

export default function NewUserForm({ createUser }) {
	const { Input, Field, Control, Label } = Form;

	const [form, setForm] = useState({ username: '', email: '' });
	const update = ({ target }) => {
		const { name, value } = target;
		setForm({ ...form, [name]: value }, console.log(form));
	};

	return (
		<Box>
			<form>
				<Field>
					<Control>
						<Label>Username</Label>
						<Input
							placeholder='Text input'
							name='username'
							value={form.username}
							onChange={update}
						/>
					</Control>
				</Field>
				<Field>
					<Control>
						<Label>Email</Label>
						<Input
							placeholder='Text input'
							name='email'
							value={form.email}
							onChange={update}
						/>
					</Control>
				</Field>
			</form>
			<div style={{ marginTop: '1em' }}>
				<Field>
					<Control>
						<Button.Group>
							<Button
								color='primary'
								type='submit'
								onMouseDown={e => {
									createUser(e, form.username, form.email);
									e.stopPropagation();
									setForm('');
								}}
							>
								Submit
							</Button>
						</Button.Group>
					</Control>
				</Field>
			</div>
		</Box>
	);
}
