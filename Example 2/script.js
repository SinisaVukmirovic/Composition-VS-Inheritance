// code that would be used to programmed some robots, for example

const barker = (state) => ({
    bark: () => console.log(`Wooff, I am ${state.name}`)
});

const driver = (state) => ({
    drive: () => state.position = state.position + state.speed
});

const killer = (state) => ({
    kill: () => console.log('...wooff...terminate...wooff, wooff...kill...')
});

barker({ name: 'Jack' }).bark();

const murderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0
    }

    return {
        ...barker(state),
        ...driver(state),
        ...killer(state)
    }
}

murderRobotDog('Rex').bark();
murderRobotDog('Don').kill();