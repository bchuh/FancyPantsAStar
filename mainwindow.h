#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QDesktopWidget>
#include <QApplication>
#include <QMainWindow>

 const int F_WIDTH=15;  //field width ,the amount of units
const int F_HEIGHT=15; //field height ,the amount of units


namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT
private:
    int G_UNIT;
public:
    explicit MainWindow(QWidget *parent = nullptr);

    ~MainWindow();


private:
    Ui::MainWindow *ui;
};

#endif // MAINWINDOW_H
