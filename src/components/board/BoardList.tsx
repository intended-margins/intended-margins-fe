import React, { useState } from "react";
import Table from "@mui/material/Table"; 
import TableBody from "@mui/material/TableBody"; 
import TableCell from "@mui/material/TableCell"; 
import TableContainer from "@mui/material/TableContainer"; 
import TableHead from "@mui/material/TableHead"; 
import TableRow from "@mui/material/TableRow"; 
import TablePagination from "@mui/material/TablePagination"; 
import Paper from "@mui/material/Paper";

interface BoardData {
    category: string;
    title: string;
    cnt: number;
    date: string
}

function createData(category: string, title: string, cnt: number, date: string): BoardData {
    return { category, title, cnt, date };
}

const rows = [
    createData("전체", "공지사항입니다", 100, "2024-01-01"),
    createData("발견", "미니멀 라이프를 위한 필수 앱 소개", 22, "2024-02-01"),
    createData("발견", "현실적인 미니멀 라이프를 위한 디자인", 34, "2024-03-01"),
    createData("라이프", "[NEW] 저희 집을 소개합니다", 12, "2024-02-03"),
];

const BoardList = () => {
    const [pg, setpg] = useState<number>(0);
    const [rpg, setrpg] = useState<number>(5);
    
    function handleChangePage(event: React.MouseEvent<HTMLButtonElement> | null, newpage: number) {
      setpg(newpage);
    }
    
    function handleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>) {
      setrpg(parseInt(event.target.value, 10));
      setpg(0);
    }

    return (
        <Paper sx={{ background: '#f6f6f6'}}>
            <h3>전   체</h3>
            <TableContainer component={Paper} sx={{ background:'#f6f6f6'}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">카테고리</TableCell>
                            <TableCell align="center">제  목</TableCell>
                            <TableCell align="center">조회수</TableCell>
                            <TableCell align="center">날  짜</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                            <TableRow
                            key={row.category}
                            sx={{
                                "&:last-child td, &:last-child th": { border: 0 }
                            }}
                            >
                            <TableCell align="center" component="th" scope="row">
                                {row.category}
                            </TableCell>
                            <TableCell align="center">{row.title}</TableCell>
                            <TableCell align="center">{row.cnt}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination 
                rowsPerPageOptions={[5, 10, 25]} 
                component="div"
                count={rows.length} 
                rowsPerPage={rpg} 
                page={pg} 
                onPageChange={handleChangePage} 
                onRowsPerPageChange={handleChangeRowsPerPage} 
            /> 
        </Paper>
    );
};

export default BoardList;