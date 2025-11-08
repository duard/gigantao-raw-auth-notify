import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TimimvEntity } from './tIMIMV.entity';

@Index('PK_TIMIMR', ['imrimovel', 'imrdata', 'imrprospeccao'], { unique: true })
@Entity('TIMIMR', { schema: 'SANKHYA' })
export class TimimrEntity {
  @Column('int', { primary: true, name: 'IMRIMOVEL' })
  imrimovel: number;

  @Column('int', { primary: true, name: 'IMRPROSPECCAO' })
  imrprospeccao: number;

  @Column('datetime', {
    primary: true,
    name: 'IMRDATA',
    default: () => 'getdate()',
  })
  imrdata: Date;

  @Column('datetime', { name: 'IMRFIMRESERVA', nullable: true })
  imrfimreserva: Date | null;

  @Column('smallint', { name: 'IMRESTAGIO', nullable: true })
  imrestagio: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timimrs)
  @JoinColumn([{ name: 'IMRUSUARIO', referencedColumnName: 'codusu' }])
  imrusuario: TsiusuEntity;

  @ManyToOne(() => TimimvEntity, (timimvEntity) => timimvEntity.timimrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IMRIMOVEL', referencedColumnName: 'imvcodigo' }])
  imrimovel2: TimimvEntity;
}
