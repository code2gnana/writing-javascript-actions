const core = require("@actions/core");
const github = require("@actions/github");


async function run() {
    try {
        const issueTitle = core.getInput("issue-title");
        const jokeBody = core.getInput("joke");
        const token = core.getInput("repo-token");

        const octakit = new github.getOctokit(token);

        const newIssue = await octakit.rest.issues.create({
            repo: github.context.repo.repo,
            owner: github.context.repo.owner,
            title: issueTitle,
            body: jokeBody
        });


    }
    catch (error) {
        core.setFailed(err.message);
    }

}

run()