{
    /**
     * Union Types: OR
     */

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    type SuccessState = {
        response: {
            body: string;
        };
    };

    type FailState = {
        response: {
            body: string;
        };
        reason: {
            message: string;
        }
    };

    type LoginState = SuccessState | FailState;
    function login(id: string, password: string) : LoginState {
        return {
            response: {
                body: 'logged in'
            }
        };
    }

    function printLoginState(state: LoginState) : void {
        // if(SuccessState typeof state)
    }
}