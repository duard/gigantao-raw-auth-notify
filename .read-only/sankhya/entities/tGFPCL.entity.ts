import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvtpEntity } from './tGFVTP.entity';
import { TgfipcEntity } from './tGFIPC.entity';

@Index('PK_TGFPCL', ['nupca', 'codprod', 'codvtp'], { unique: true })
@Entity('TGFPCL', { schema: 'SANKHYA' })
export class TgfpclEntity {
  @Column('int', { primary: true, name: 'NUPCA' })
  nupca: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODVTP' })
  codvtp: number;

  @Column('float', { name: 'QTD', precision: 53, default: () => '(0)' })
  qtd: number;

  @ManyToOne(() => TgfvtpEntity, (tgfvtpEntity) => tgfvtpEntity.tgfpcls)
  @JoinColumn([{ name: 'CODVTP', referencedColumnName: 'codvtp' }])
  codvtp2: TgfvtpEntity;

  @ManyToOne(() => TgfipcEntity, (tgfipcEntity) => tgfipcEntity.tgfpcls)
  @JoinColumn([
    { name: 'NUPCA', referencedColumnName: 'nupca' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tgfipc: TgfipcEntity;
}
