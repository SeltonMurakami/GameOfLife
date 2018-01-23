function make2DArray(x,y){
	let arr = new Array(x);
	for(let i = 0; i < x; i++){
		arr[i] = new Array(y);
	}
	return arr;
}
function areEq(a,b){
	for(let i = 0;i < a.length;i++){
		for(let j = 0;j < a[i].length;j++){
			if(a[i][j] != b[i][j]){
				return false;	
			}
		}
	}
	return true;
}
function rule(i,j){
	let neib = 0
	for(let a = -1;a < 2;a++){
		for(let b = -1;b < 2;b++){
			if(grid[i+a] != undefined){
				if(grid[i+a][j+b] != undefined){
					neib += grid[i+a][j+b];
				}
			}
		}
	}
	if(grid[i][j]){
		if(neib == 3 || neib == 4){
			return 1;	
		}else{
			return 0;	
		}
	}else{
		if(neib == 3){
			return 1;	
		}else{
			return 0;
		}
	}
}
var grid;
let cols;
let rows;
let res = 20;
let prev;
function setup(){
	createCanvas(600,600);
	cols = width/res;
	rows = height/res;
	grid = make2DArray(cols, rows);
	prev = make2DArray(cols, rows);
	for(let i = 0;i < cols;i++){
		for(let j = 0;j < rows;j++){
			grid[i][j] = floor(random(2));
		}
	}
	
}
function draw(){
	let next = make2DArray(cols,rows);
	for(let i = 0;i < cols;i++){
		for(let j = 0;j < rows;j++){
			let x = res * i;
			let y = res * j;
			if(grid[i][j]){
				fill(255);	
			}else{
				fill(0)	
			}
			stroke(0)
			rect(x,y,res-1,res-1);
			next[i][j] = rule(i,j)
		}
	}
	if(areEq(grid,next)||areEq(next,prev) ){
		alert("Game is stable, restarting...");
		for(let i = 0;i < cols;i++){
		for(let j = 0;j < rows;j++){
			grid[i][j] = floor(random(2));
		}
	}
	}else{
		prev = grid;
		grid = next;
	}
}
