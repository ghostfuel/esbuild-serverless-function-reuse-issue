export const handlerPath = (context: string) => {
    const cwd = process.cwd();
    let path = context.split(cwd)[1];

    // If importing a function from another directory, the path cwd won't work, go up one level to services
    if (!path) {
        const upperPath = cwd.substring(0, cwd.lastIndexOf('/'));
        path = context.split(upperPath)[1];
        return `..${path.replace(/\\/g, '/')}`;
    }

    return `${path.substring(1).replace(/\\/g, '/')}`;
};
