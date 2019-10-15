# Repro for SAM OPTIONS bug

## Problem

SAM doesn't forward OPTIONS requests to the lambda handler.

Template: [cdk.out/SamOptionsRepro.template.json](cdk.out/SamOptionsRepro.template.json)

## Steps

Do the following:

- clone repo
- install SAM
- run `npm start` in repo
- run a `GET` request on `http://localhost:3000/`. You should see that it returns the received event in the response and the SAM output shows that the lambda has been mounted and executed.
- run an `OPTIONS` request. A log item appears to say that it has been processed, but the lambda is not invoked.

## Notes

Note that I've edited the [SamOptionsRepro.template.json](cdk.out/SamOptionsRepro.template.json) file to use a relative path for the asset, which seems to work. If you run `synth` again it will be replaced with the absolute path on your computer.
