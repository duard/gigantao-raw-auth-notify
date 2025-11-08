import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfphisEntity } from './tFPHIS.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPMOC', ['codhistocor', 'sequencia'], { unique: true })
@Entity('TFPMOC', { schema: 'SANKHYA' })
export class TfpmocEntity {
  @Column('smallint', { primary: true, name: 'CODHISTOCOR' })
  codhistocor: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'DESCRMOTIVO', length: 250 })
  descrmotivo: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TfphisEntity, (tfphisEntity) => tfphisEntity.tfpmocs)
  @JoinColumn([{ name: 'CODHISTOCOR', referencedColumnName: 'codhistocor' }])
  codhistocor2: TfphisEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpmocs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
