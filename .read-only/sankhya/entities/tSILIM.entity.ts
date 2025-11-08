import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSILIM', ['codusu', 'codgru', 'evento'], { unique: true })
@Entity('TSILIM', { schema: 'SANKHYA' })
export class TsilimEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'CODGRU' })
  codgru: number;

  @Column('smallint', { primary: true, name: 'EVENTO' })
  evento: number;

  @Column('char', { name: 'TIPOEVENTO', nullable: true, length: 1 })
  tipoevento: string | null;

  @Column('float', { name: 'LIMITE', nullable: true, precision: 53 })
  limite: number | null;

  @Column('char', { name: 'TIPOLIMITE', nullable: true, length: 1 })
  tipolimite: string | null;

  @Column('char', { name: 'ENVIAREMAIL', length: 1, default: () => "'N'" })
  enviaremail: string;

  @Column('varchar', { name: 'ENVIARSMS', length: 1, default: () => "'N'" })
  enviarsms: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsilims)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
