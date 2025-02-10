# TCH - Thak Chuka Hun 

Push changes to your branch- 
1. git checkout your-branch-name
2. git add .
3. git commit -m ""
4. git push origin your-branch-name

Merge your branch with the main branch (apni branch ke change ko main branch mein daal rha hun)
1. git checkout main
2. git fetch
3. git pull origin main
4. git merge your-branch-name
5. Conflicts(if any) : git add .
                       git commit -m ""
6. git push origin main

Merge main branch into your branch (main branch ke changes ko apni branch mein daal rha hun)
1. git checkout your-branch-name
2. git fetch origin
3. git merge origin/main
4. Conflicst(if any): git add . 
                      git commit -m "" 
5. git push origin your-branch-name
