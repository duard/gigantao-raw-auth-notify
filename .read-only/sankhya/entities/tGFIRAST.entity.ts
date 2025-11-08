import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcrastEntity } from './tGFCRAST.entity';

@Index('PK_TGFIRAST', ['nurast', 'codemp', 'codprod'], { unique: true })
@Entity('TGFIRAST', { schema: 'SANKHYA' })
export class TgfirastEntity {
  @Column('int', { primary: true, name: 'NURAST' })
  nurast: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @ManyToOne(() => TgfcrastEntity, (tgfcrastEntity) => tgfcrastEntity.tgfirasts)
  @JoinColumn([{ name: 'NURAST', referencedColumnName: 'nurast' }])
  nurast2: TgfcrastEntity;
}
