import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TrsmotEntity } from './tRSMOT.entity';
import { TrsreqEntity } from './tRSREQ.entity';

@Index('PK_TRSAVR', ['nuavaliacao', 'nurequisicao'], { unique: true })
@Entity('TRSAVR', { schema: 'SANKHYA' })
export class TrsavrEntity {
  @Column('int', { primary: true, name: 'NUAVALIACAO' })
  nuavaliacao: number;

  @Column('int', { primary: true, name: 'NUREQUISICAO' })
  nurequisicao: number;

  @Column('datetime', {
    name: 'DHAVALIACAO',
    default: () =>
      'dateadd(millisecond, -datepart(millisecond,getdate()),getdate())',
  })
  dhavaliacao: Date;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'A'" })
  status: string;

  @Column('char', { name: 'OBSAVALIACAO', nullable: true, length: 250 })
  obsavaliacao: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trsavrs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TrsmotEntity, (trsmotEntity) => trsmotEntity.trsavrs)
  @JoinColumn([{ name: 'CODMOTIVO', referencedColumnName: 'codmotivo' }])
  codmotivo: TrsmotEntity;

  @ManyToOne(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.trsavrs)
  @JoinColumn([{ name: 'NUREQUISICAO', referencedColumnName: 'nurequisicao' }])
  nurequisicao2: TrsreqEntity;
}
