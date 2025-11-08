import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimsacEntity } from './tIMSAC.entity';

@Index('IX_SCASAC', ['scasac'], {})
@Index('PK_TIMSCA', ['scasac', 'scacodigo'], { unique: true })
@Entity('TIMSCA', { schema: 'SANKHYA' })
export class TimscaEntity {
  @Column('int', { primary: true, name: 'SCACODIGO' })
  scacodigo: number;

  @Column('int', { primary: true, name: 'SCASAC' })
  scasac: number;

  @Column('datetime', { name: 'SCADATARES', nullable: true })
  scadatares: Date | null;

  @Column('text', { name: 'SCARESULTADO', nullable: true })
  scaresultado: string | null;

  @Column('datetime', { name: 'SCAPROMETIDO', nullable: true })
  scaprometido: Date | null;

  @Column('text', { name: 'SCASOLICITACAO', nullable: true })
  scasolicitacao: string | null;

  @Column('datetime', { name: 'SCAHORAINICIO', nullable: true })
  scahorainicio: Date | null;

  @Column('datetime', { name: 'SCAHORAFIM', nullable: true })
  scahorafim: Date | null;

  @Column('int', { name: 'SCAATENDORIG', nullable: true })
  scaatendorig: number | null;

  @Column('char', { name: 'SCALEGADO', nullable: true, length: 1 })
  scalegado: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timscas)
  @JoinColumn([{ name: 'SCAUSUARIO', referencedColumnName: 'codusu' }])
  scausuario: TsiusuEntity;

  @ManyToOne(() => TimsacEntity, (timsacEntity) => timsacEntity.timscas)
  @JoinColumn([{ name: 'SCASAC', referencedColumnName: 'saccodigo' }])
  scasac2: TimsacEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timscas2)
  @JoinColumn([{ name: 'SCAUSUDEST', referencedColumnName: 'codusu' }])
  scausudest: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timscas3)
  @JoinColumn([{ name: 'SCAUSUARIOALT', referencedColumnName: 'codusu' }])
  scausuarioalt: TsiusuEntity;
}
