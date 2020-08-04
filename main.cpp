
#include <QApplication>
#include <QGraphicsScene>
#include <QGraphicsView>
#include <QGraphicsRectItem>
#include "my_scene.h"
#include "block.h"
#include "mainwindow.h"
int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    w.setFixedSize((F_WIDTH+0.7*(F_WIDTH/15.0))*G_UNIT,(F_HEIGHT+3.5*(F_WIDTH/15.0))*G_UNIT);  //2 & 1.3 are just randomly taken numbers
    w.show();
    return a.exec();
}
