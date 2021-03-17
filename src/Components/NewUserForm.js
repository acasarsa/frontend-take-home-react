import { useState } from 'react';
import { Form, Button, Box } from 'react-bulma-components/';

export default function NewUserForm({ createUser }) {
	const { Input, Field, Control, Label } = Form;

	const [form, setForm] = useState({ username: '', company: '', email: '' });
	const update = ({ target }) => {
		setForm({ ...form, [target.name]: target.value }, console.log(form));
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
						<Label>Company</Label>
						<Input
							placeholder='Text input'
							name='company'
							value={form.company}
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
			<Field>
				<Control>
					<Button.Group>
						<Button
							type='submit'
							onMouseDown={e => {
								createUser(e, form.username, form.company, form.email);
								e.stopPropagation();
								setForm('');
							}}
						>
							Submit
						</Button>
					</Button.Group>
				</Control>
			</Field>
		</Box>
	);
}
