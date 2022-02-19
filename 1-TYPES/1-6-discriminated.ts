{
    type SuccessState = {
        result: 'success',
        response: {
            body: string;
        };
    };

    type FailState = {
        result: 'fail',
        reason: string;
    };

    type LoginState = SuccessState | FailState;
    function login(id: string, password: string) : LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in'
            }
        };
    }

    function printLoginState(state: LoginState) {
        state.result === 'success' ? console.log(`${state.response.body}`) : console.log(`${state.reason}`);
    }

    printLoginState({result: 'success', response: {body: 'R'}})

}