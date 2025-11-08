import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgftipEntity } from './tGFTIP.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfmeqEntity } from './tGFMEQ.entity';

@Index('PK_TGFSOL', ['nusoli'], { unique: true })
@Entity('TGFSOL', { schema: 'SANKHYA' })
export class TgfsolEntity {
  @Column('int', { primary: true, name: 'NUSOLI' })
  nusoli: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @Column('datetime', { name: 'DTINICIAL', nullable: true })
  dtinicial: Date | null;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @Column('varchar', { name: 'HORARIO', nullable: true, length: 30 })
  horario: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { name: 'NUAGE', nullable: true })
  nuage: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfsols)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfsols2)
  @JoinColumn([{ name: 'CODUSUSOL', referencedColumnName: 'codusu' }])
  codususol: TsiusuEntity;

  @ManyToOne(() => TgftipEntity, (tgftipEntity) => tgftipEntity.tgfsols, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODTIP', referencedColumnName: 'codtip' }])
  codtip: TgftipEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfsols)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfsols)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.tgfsols)
  @JoinColumn([{ name: 'NUMEQ', referencedColumnName: 'numeq' }])
  numeq: TgfmeqEntity;
}
