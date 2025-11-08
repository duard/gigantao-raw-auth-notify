import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TimlotEntity } from './tIMLOT.entity';
import { TimcarEntity } from './tIMCAR.entity';
import { TimtzlEntity } from './tIMTZL.entity';
import { TimltvEntity } from './tIMLTV.entity';
import { TimppvEntity } from './tIMPPV.entity';
import { TimsacEntity } from './tIMSAC.entity';
import { TimvdoEntity } from './tIMVDO.entity';

@Index('PK_TIMLTE', ['ltecodigo'], { unique: true })
@Entity('TIMLTE', { schema: 'SANKHYA' })
export class TimlteEntity {
  @Column('int', { primary: true, name: 'LTECODIGO' })
  ltecodigo: number;

  @Column('varchar', { name: 'LTELOTE', length: 10 })
  ltelote: string;

  @Column('varchar', { name: 'LTECEP', nullable: true, length: 20 })
  ltecep: string | null;

  @Column('varchar', { name: 'LTERUA', nullable: true, length: 50 })
  lterua: string | null;

  @Column('char', { name: 'LTESITUACAO', length: 2, default: () => "'NI'" })
  ltesituacao: string;

  @Column('float', { name: 'LTEAREA', nullable: true, precision: 53 })
  ltearea: number | null;

  @Column('char', { name: 'LTEBENFEITORIA', nullable: true, length: 1 })
  ltebenfeitoria: string | null;

  @Column('float', { name: 'LTEPRECODOMETRO', nullable: true, precision: 53 })
  lteprecodometro: number | null;

  @Column('float', { name: 'LTEVALORCOMPRA', nullable: true, precision: 53 })
  ltevalorcompra: number | null;

  @Column('varchar', { name: 'LTEREGISTRO', nullable: true, length: 20 })
  lteregistro: string | null;

  @Column('varchar', { name: 'LTELIVRO', nullable: true, length: 20 })
  ltelivro: string | null;

  @Column('varchar', { name: 'LTEFOLHA', nullable: true, length: 20 })
  ltefolha: string | null;

  @Column('datetime', { name: 'LTEDATAREGISTRO', nullable: true })
  ltedataregistro: Date | null;

  @Column('float', { name: 'LTEDESCPARCELA', nullable: true, precision: 53 })
  ltedescparcela: number | null;

  @Column('varchar', { name: 'LTECNFFRENTE', length: 60 })
  ltecnffrente: string;

  @Column('varchar', { name: 'LTECNFFUNDO', nullable: true, length: 60 })
  ltecnffundo: string | null;

  @Column('varchar', { name: 'LTECNFDIREITA', nullable: true, length: 60 })
  ltecnfdireita: string | null;

  @Column('varchar', { name: 'LTECNFESQUERDA', nullable: true, length: 60 })
  ltecnfesquerda: string | null;

  @Column('varchar', { name: 'LTECNFCHANFRO', nullable: true, length: 60 })
  ltecnfchanfro: string | null;

  @Column('varchar', { name: 'LTECNFVARIANTE', nullable: true, length: 60 })
  ltecnfvariante: string | null;

  @Column('varchar', { name: 'LTEMEDFRENTE', length: 60 })
  ltemedfrente: string;

  @Column('varchar', { name: 'LTEMEDFUNDO', length: 60 })
  ltemedfundo: string;

  @Column('varchar', { name: 'LTEMEDDIREITA', length: 60 })
  ltemeddireita: string;

  @Column('varchar', { name: 'LTEMEDESQUERDA', length: 60 })
  ltemedesquerda: string;

  @Column('varchar', { name: 'LTEMEDCHANFRO', nullable: true, length: 60 })
  ltemedchanfro: string | null;

  @Column('varchar', { name: 'LTEMEDVARIANTE', nullable: true, length: 60 })
  ltemedvariante: string | null;

  @Column('varchar', { name: 'LTEREGISTROITUIPTU', nullable: true, length: 20 })
  lteregistroituiptu: string | null;

  @Column('varchar', { name: 'LTEENERGIA', nullable: true, length: 20 })
  lteenergia: string | null;

  @Column('varchar', { name: 'LTEAGUA', nullable: true, length: 20 })
  lteagua: string | null;

  @Column('text', { name: 'LTEBENFEITORIAS', nullable: true })
  ltebenfeitorias: string | null;

  @Column('varchar', { name: 'LTEOBS', nullable: true, length: 120 })
  lteobs: string | null;

  @Column('datetime', { name: 'LTEDATADECADASTRO', default: () => 'getdate()' })
  ltedatadecadastro: Date;

  @Column('datetime', { name: 'LTEULTIMOIPTU', nullable: true })
  lteultimoiptu: Date | null;

  @Column('int', { name: 'LTECIDADE', nullable: true })
  ltecidade: number | null;

  @Column('char', { name: 'LTELEGADO', nullable: true, length: 1 })
  ltelegado: string | null;

  @Column('smallint', { name: 'LTEY', nullable: true })
  ltey: number | null;

  @Column('smallint', { name: 'LTEX', nullable: true })
  ltex: number | null;

  @Column('datetime', { name: 'LTEDHALTERACAO', nullable: true })
  ltedhalteracao: Date | null;

  @Column('int', { name: 'LTEUSUALTERACAO', nullable: true })
  lteusualteracao: number | null;

  @Column('int', { name: 'LTEUSUINCLUSAO', nullable: true })
  lteusuinclusao: number | null;

  @Column('varchar', { name: 'LTEQUADRA', nullable: true, length: 10 })
  ltequadra: string | null;

  @Column('varchar', { name: 'LTECOMPLEMENTO', nullable: true, length: 50 })
  ltecomplemento: string | null;

  @Column('varchar', { name: 'LTENUMERO', nullable: true, length: 10 })
  ltenumero: string | null;

  @Column('int', { name: 'LTECODEND', nullable: true })
  ltecodend: number | null;

  @Column('int', { name: 'LTEBAIRRO', nullable: true })
  ltebairro: number | null;

  @Column('char', { name: 'LTEESQUINA', nullable: true, length: 1 })
  lteesquina: string | null;

  @Column('varchar', { name: 'LTEMATRICULA', nullable: true, length: 60 })
  ltematricula: string | null;

  @ManyToOne(() => TimlotEntity, (timlotEntity) => timlotEntity.timltes)
  @JoinColumn([{ name: 'LTELOTEAMENTO', referencedColumnName: 'lotcodigo' }])
  lteloteamento: TimlotEntity;

  @ManyToOne(() => TimcarEntity, (timcarEntity) => timcarEntity.timltes)
  @JoinColumn([{ name: 'LTECARTORIO', referencedColumnName: 'carcodigo' }])
  ltecartorio: TimcarEntity;

  @ManyToOne(() => TimtzlEntity, (timtzlEntity) => timtzlEntity.timltes)
  @JoinColumn([{ name: 'LTETIPOZONA', referencedColumnName: 'tzlcodigo' }])
  ltetipozona: TimtzlEntity;

  @OneToMany(() => TimltvEntity, (timltvEntity) => timltvEntity.ltvlote)
  timltvs: TimltvEntity[];

  @OneToMany(() => TimppvEntity, (timppvEntity) => timppvEntity.ppvlote)
  timppvs: TimppvEntity[];

  @OneToMany(() => TimsacEntity, (timsacEntity) => timsacEntity.saclote)
  timsacs: TimsacEntity[];

  @OneToMany(() => TimvdoEntity, (timvdoEntity) => timvdoEntity.vdolote)
  timvdos: TimvdoEntity[];
}
