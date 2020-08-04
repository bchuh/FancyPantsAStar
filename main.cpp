
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
    QDesktopWidget* desktopWidget = QApplication::desktop();
        //获取可用桌面大小
        QRect deskRect = desktopWidget->availableGeometry();
        int   m_nActScreenY = deskRect.height();

        int G_UNIT=90.0*(m_nActScreenY/2080.0);
              //
    MainWindow w;
    w.setFixedSize((F_WIDTH+0*(F_WIDTH/15.0))*G_UNIT,(F_HEIGHT+2.5*(F_WIDTH/15.0))*G_UNIT);  //0 & 2.5 are just randomly taken numbers
    w.show();
    return a.exec();
}
