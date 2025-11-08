import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TCBREL', ['codemp', 'codparc', 'dtinirel'], { unique: true })
@Entity('TCBREL', { schema: 'SANKHYA' })
export class TcbrelEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { name: 'CODREL' })
  codrel: number;

  @Column('datetime', { primary: true, name: 'DTINIREL' })
  dtinirel: Date;

  @Column('datetime', { name: 'DTFIMREL', nullable: true })
  dtfimrel: Date | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbrels)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbrels)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcbrels)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
