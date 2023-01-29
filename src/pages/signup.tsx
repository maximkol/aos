import { DatePicker, Label, Stack, TextField } from "@fluentui/react";
import styles from '../styles/Home.module.scss';
//TODO:styling
//TODO: validate
//TODO: post data to server
export default function SignUp() {
    return (
        <div className={styles.signupForm}>
            <Stack horizontal>
                <Label>Имя пользователя</Label>
                <TextField required></TextField>
            </Stack>
            <Stack horizontal>
                <Label>Электронная почта</Label>
                <TextField required></TextField>
            </Stack>
            <Stack horizontal>
                <Label>Имя</Label>
                <TextField></TextField>
            </Stack>
            <Stack horizontal>
                <Label>Фамилия</Label>
                <TextField></TextField>
            </Stack>
            <Stack horizontal>
                <Label>Город</Label>
                <TextField></TextField>
            </Stack>
            <Stack horizontal>
                <Label>Дата рождения</Label>
                <DatePicker
                    placeholder="Выберите дату..."
                    ariaLabel="Select a date"
                />
            </Stack>
        </div>
    )
}