import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgagarEntity } from './tGAGAR.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGAAVA', ['nrogar', 'codparc'], { unique: true })
@Entity('TGAAVA', { schema: 'SANKHYA' })
export class TgaavaEntity {
  @Column('int', { primary: true, name: 'NROGAR' })
  nrogar: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgaavas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgagarEntity, (tgagarEntity) => tgagarEntity.tgaavas)
  @JoinColumn([{ name: 'NROGAR', referencedColumnName: 'nrogar' }])
  nrogar2: TgagarEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgaavas)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
