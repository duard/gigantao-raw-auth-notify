import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfvenEntity } from './tGFVEN.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGFRES', ['numreserva'], { unique: true })
@Entity('TGFRES', { schema: 'SANKHYA' })
export class TgfresEntity {
  @Column('int', { primary: true, name: 'NUMRESERVA' })
  numreserva: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODLOCAL' })
  codlocal: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('datetime', { name: 'DHRESERVA' })
  dhreserva: Date;

  @Column('float', { name: 'QTDRES', precision: 53 })
  qtdres: number;

  @Column('datetime', { name: 'DHBAIXA', nullable: true })
  dhbaixa: Date | null;

  @Column('float', { name: 'QTDBAIXADA', nullable: true, precision: 53 })
  qtdbaixada: number | null;

  @Column('smallint', { name: 'VALIDADE', nullable: true })
  validade: number | null;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 10 })
  observacao: string | null;

  @Column('char', { name: 'CANCELADA', length: 1, default: () => "'N'" })
  cancelada: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfres)
  @JoinColumn([{ name: 'CODUSUBAIXA', referencedColumnName: 'codusu' }])
  codusubaixa: TsiusuEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfres)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend: TgfvenEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfres)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;
}
