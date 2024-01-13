import {useCallback, useEffect, useState} from "react";

const LoginForm = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        // 필드 검사 후 잘못된 값이면 제출 처리를 중단한다.
        const errors = validate()
        // 오류 메세지 상태를 갱신한다
        setErrors(errors)
        // 잘못된 값이면 제출 처리를 중단한다.
        if (Object.values(errors).some(v => v)) {
            return
        }

        alert(JSON.stringify(values, null, 2))
    }

    // 필드값을 검증한다.
    const validate = useCallback(() => {
        const errors = {
            email: "",
            password: "",
        }

        if (!values.email) {
            errors.email = "이메일을 입력하세요"
        }
        if (!values.password) {
            errors.password = "비밀번호를 입력하세요"
        }
    }, [values])

    // 입력값이 변경될때 마다 검증한다.
    useEffect(() => {
        validate()
    }, [validate])

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            {/* 이메일 오류메시지를 출력한다 */}
            {errors.email && <span>{errors.email}</span>}

            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
            {/* 비밀번호 오류메시지를 출력한다 */}
            {errors.password && <span>{errors.password}</span>}

            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;