import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    var rab = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -100);
    rab.text = "Le gang des requins";
    rab.tooltip = "requin gang faites attention";
    rab.command = 'akula.funone';
    rab.show();
    let dispo = vscode.commands.registerCommand('akula.funone', () => {
        rab.text = `$(sync~spin)`;
        const apr = setInterval(() => {
            rab.text = "🦈🦈🦈🦈🦈🦈";
        }, 3000);
        const av = setInterval(() => {
            rab.text = "Le gang des requins";
        }, 5000)
    }); 
    
	/* The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('akula.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from akula!');
	}); 

	context.subscriptions.push(disposable); */
}


export function deactivate() {

}
