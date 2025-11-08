import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { AdGeraoscomEntity } from './aD_GERAOSCOM.entity';

@Index('PK_AD_GERAOSCOMITE', ['id', 'seq'], { unique: true })
@Entity('AD_GERAOSCOMITE', { schema: 'SANKHYA' })
export class AdGeraoscomiteEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { primary: true, name: 'SEQ' })
  seq: number;

  @Column('datetime', { name: 'DT_EXEC_INI', nullable: true })
  dtExecIni: Date | null;

  @Column('datetime', { name: 'DT_EXEC_FIM', nullable: true })
  dtExecFim: Date | null;

  @Column('int', { name: 'USU_EXEC', nullable: true })
  usuExec: number | null;

  @Column('int', { name: 'INTERVALO', nullable: true })
  intervalo: number | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'QTD_H_TRAB', nullable: true })
  qtdHTrab: number | null;

  @Column('int', { name: 'NUM_OS', nullable: true })
  numOs: number | null;

  @Column('int', { name: 'SEQ_OS', nullable: true })
  seqOs: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.adGeraoscomites)
  @JoinColumn([{ name: 'COD_SERV', referencedColumnName: 'codprod' }])
  codServ: TgfproEntity;

  @ManyToOne(
    () => AdGeraoscomEntity,
    (adGeraoscomEntity) => adGeraoscomEntity.adGeraoscomites,
  )
  @JoinColumn([{ name: 'ID', referencedColumnName: 'id' }])
  adGeraoscom: AdGeraoscomEntity;
}
