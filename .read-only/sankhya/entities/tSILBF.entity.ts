import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSILBF', ['codsol'], { unique: true })
@Entity('TSILBF', { schema: 'SANKHYA' })
export class TsilbfEntity {
  @Column('int', { primary: true, name: 'CODSOL' })
  codsol: number;

  @Column('varchar', { name: 'TELA', nullable: true, length: 100 })
  tela: string | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('text', { name: 'EXPRESSAO', nullable: true })
  expressao: string | null;

  @Column('varchar', { name: 'NOMEFILTRO', nullable: true, length: 100 })
  nomefiltro: string | null;

  @Column('datetime', { name: 'DTCRIACAO', nullable: true })
  dtcriacao: Date | null;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 100 })
  motivo: string | null;

  @Column('datetime', { name: 'DTLIBERACAO', nullable: true })
  dtliberacao: Date | null;

  @Column('datetime', { name: 'DTREPROVACAO', nullable: true })
  dtreprovacao: Date | null;

  @Column('varchar', { name: 'CHAVE', nullable: true, length: 400 })
  chave: string | null;

  @Column('int', { name: 'CODFILTRO', nullable: true })
  codfiltro: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsilbfs)
  @JoinColumn([{ name: 'REPROVADOPOR', referencedColumnName: 'codusu' }])
  reprovadopor: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsilbfs2)
  @JoinColumn([{ name: 'AUTOR', referencedColumnName: 'codusu' }])
  autor: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsilbfs3)
  @JoinColumn([{ name: 'APROVADOPOR', referencedColumnName: 'codusu' }])
  aprovadopor: TsiusuEntity;
}
