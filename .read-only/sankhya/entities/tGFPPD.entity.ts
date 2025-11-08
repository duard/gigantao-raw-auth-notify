import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfipcEntity } from './tGFIPC.entity';

@Index('PK_TGFPPD', ['nupca', 'codprod', 'nunota', 'sequencia', 'seqperiodo'], {
  unique: true,
})
@Entity('TGFPPD', { schema: 'SANKHYA' })
export class TgfppdEntity {
  @Column('int', { primary: true, name: 'NUPCA' })
  nupca: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { primary: true, name: 'SEQPERIODO' })
  seqperiodo: number;

  @Column('float', { name: 'QTD', precision: 53, default: () => '(0)' })
  qtd: number;

  @Column('varchar', { name: 'TIPMOV', length: 1 })
  tipmov: string;

  @Column('datetime', { name: 'DTPREVCHEGADA', nullable: true })
  dtprevchegada: Date | null;

  @Column('varchar', { name: 'NUMPEDIDO2', nullable: true, length: 15 })
  numpedido2: string | null;

  @ManyToOne(() => TgfipcEntity, (tgfipcEntity) => tgfipcEntity.tgfppds)
  @JoinColumn([
    { name: 'NUPCA', referencedColumnName: 'nupca' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tgfipc: TgfipcEntity;
}
