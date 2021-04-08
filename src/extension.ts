import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    var barre = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, -100);
    barre.text = "Le gang des requins";
    barre.tooltip = "requin gang faites attention";
    barre.command = 'akula.cliquer';
    barre.show();
    let dispo = vscode.commands.registerCommand('akula.cliquer', () => {
        barre.text = "No u";
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
