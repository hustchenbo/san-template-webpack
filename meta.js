module.exports = {
    prompts: {
        description: {
            type: 'string',
            required: true,
            message: 'Project description'
        },
        name: {
            type: 'string',
            required: true,
            label: 'Project name',
        }
    },
    skipInterpolation: 'src/page/template/list.template.js'
};
