import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgasafEntity } from './tGASAF.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGADIV', ['codparc', 'codsaf', 'sequencia'], { unique: true })
@Entity('TGADIV', { schema: 'SANKHYA' })
export class TgadivEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODSAF' })
  codsaf: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODNAT' })
  codnat: number;

  @Column('datetime', { name: 'DTVENC' })
  dtvenc: Date;

  @Column('float', { name: 'VLRDIVIDA', precision: 53 })
  vlrdivida: number;

  @Column('char', { name: 'OBS', nullable: true, length: 250 })
  obs: string | null;

  @Column('datetime', { name: 'DTPAGAMENTO', nullable: true })
  dtpagamento: Date | null;

  @ManyToOne(() => TgasafEntity, (tgasafEntity) => tgasafEntity.tgadivs)
  @JoinColumn([{ name: 'CODSAF', referencedColumnName: 'codsaf' }])
  codsaf2: TgasafEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgadivs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgadivs2)
  @JoinColumn([{ name: 'CODPARCCRED', referencedColumnName: 'codparc' }])
  codparccred: TgfparEntity;
}
